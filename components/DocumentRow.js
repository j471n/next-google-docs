import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/router";

function DocumentRow({ id, fileName, date }) {
  const router = useRouter();
  return (
    <div
      className="flex items-center p-3 rounded-lg md:hover:bg-gray-100 w-full cursor-pointer text-sm md:text-base"
      onClick={(e) => router.push(`/doc/${id}`)}
    >
      <Icon name="article" size="2xl" color="blue" />
      <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
      <p className="pr-5 text-sm">{`${date
        ?.toDate()
        .toString()
        .slice(4, 10)}, ${date?.toDate().toString().slice(11, 15)}`}</p>
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="border-0"
      >
        <Icon name="more_vert" size="2xl" />
      </Button>
    </div>
  );
}

export default DocumentRow;
