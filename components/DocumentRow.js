import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/router";

function DocumentRow({ id, fileName, date }) {
  const router = useRouter();
  return (
    <tr
      className="flex items-center text-gray-600 row"
      onClick={(e) => router.push(`/doc/${id}`)}
    >
      <td className="col-1 flex items-center space-x-2 font-medium capitalize">
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
        <Button
          color="gray"
          buttonType="outline"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="border-0 "
        >
          <Icon name="more_vert" size="2xl" />
        </Button>
      </td>
    </tr>
  );
}

export default DocumentRow;
// flex items-center p-3 rounded-lg md:hover:bg-gray-100 w-full cursor-pointer text-sm md:text-base
{
  /* <tr>
  <td></td>
  <td></td>
  <td></td>
</tr>; */
}
