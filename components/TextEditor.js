import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState, useEffect } from "react";
import { EditorState } from "draft-js";
import { useRouter } from "next/router";
import { convertFromRaw, convertToRaw } from "draft-js";
import { db } from "../firebase";
import { useSession } from "next-auth/client";
import { useDocumentOnce } from "react-firebase-hooks/firestore";

// dynamic import
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  { ssr: false }
);

export default function TextEditor() {
  const router = useRouter();
  const [session] = useSession();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const { id } = router.query;

  const [snapshot] = useDocumentOnce(
    db
      .collection("userDocs")
      .doc(session?.user?.email)
      .collection("docs")
      .doc(id)
  );

  useEffect(() => {
    if (snapshot?.data()?.editorState) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(snapshot?.data()?.editorState)
        )
      );
    }
  }, [snapshot]);

  function editorStateChange(editorState) {
    setEditorState(editorState);
    db.collection("userDocs")
      .doc(session?.user?.email)
      .collection("docs")
      .doc(id)
      .set(
        { editorState: convertToRaw(editorState.getCurrentContent()) },
        {
          merge: true,
        }
      );
  }
  return (
    <div className="bg-[#F1F3F4] min-h-screen pb-16 print:hidden">
      <Editor
        editorState={editorState}
        onEditorStateChange={editorStateChange}
        toolbarClassName="flex sticky top-0 z-50 sm:!justify-center !print:hidden"
        editorClassName="mt-6 py-5 px-10 bg-white shadow-md max-w-3xl !min-h-[1100px] mx-auto ring-1 ring-gray-300 !print:block"
      />
    </div>
  );
}
