import _ from "lodash";
import { memo } from "react";

const Li = memo(function Li({ fullname }) {
  console.log(`renderizando ${fullname}`);

  return (
    <li>
      {fullname}
    </li>
  );
}, _.isEqual);

const MyList = memo(function MyList({ data }) {
  console.log("renderizando lista");

  return (
    <ul>
      {data.map(x => (
        <Li
          key={x.name + x.lastname}
          fullname={`${x.name} ${x.lastname}`}
        />
      ),
      )}
    </ul>
  );
});

export default MyList;
