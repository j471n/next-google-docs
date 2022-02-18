import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/router";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";

function DocumentRow({ id, fileName, date, deleteDocument }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const deleteModal = (
    <Modal
      size="regular"
      active={showModal}
      toggler={() => setShowModal(false)}
    >
      <ModalHeader toggler={() => setShowModal(false)}>
        Delete Document
      </ModalHeader>
      <ModalBody>
        <p className="text-base leading-relaxed text-gray-600 font-normal">
          Are you sure you want to permanently delete this Document?
        </p>
      </ModalBody>
      <ModalFooter>
        <Button
          color="gray"
          buttonType="link"
          onClick={() => setShowModal(false)}
          ripple="dark"
        >
          Close
        </Button>

        <Button
          color="red"
          onClick={() => {
            deleteDocument(id);
            setShowModal(false);
          }}
          ripple="light"
        >
          Delete
        </Button>
      </ModalFooter>
    </Modal>
  );

  return (
    <tr className="flex items-center row">
      <td
        className="col-1 flex items-center space-x-2 font-medium capitalize"
        onClick={(e) => router.push(`/doc/${id}`)}
      >
        <Icon name="article" size="2xl" color="blue" />
        <p className="flex-grow truncate">{fileName}</p>
      </td>

      <td className="col-2">
        {`${date?.toDate().toString().slice(4, 10)}, ${date
          ?.toDate()
          .toString()
          .slice(11, 15)}`}
      </td>

      <td className="col-3 flex justify-center">
        <Dropdown
          color="darkgray"
          buttonText={<Icon name="more_vert" size="2xl" />}
          buttonType="outline"
          size="sm"
          rounded={true}
          ripple="light"
          className="mx-auto rounded-full !outline-none border-0"
        >
          <DropdownLink
            color="red"
            ripple="dark"
            onClick={() => setShowModal(true)}
          >
            Delete
          </DropdownLink>
          <DropdownLink
            color="blue"
            ripple="dark"
            onClick={() => window.open(`/doc/${id}`, "_blank")}
          >
            Open in new tab
          </DropdownLink>
        </Dropdown>
      </td>
      {deleteModal}
    </tr>
  );
}

export default DocumentRow;
