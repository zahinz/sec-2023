import { useParams } from "react-router-dom";
import JobData from "../assets/job-directory-data.json";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

function Job() {
  const param = useParams();

  // create a function to filter element in JobData which id === param.id, return an object
  const filteredArray = JobData.filter((item) => String(item.id) === param.id);
  const [filteredJob] = filteredArray;

  // destructuring
  //   const array = [1, 2, 3];
  //   console.log(array);

  //   const [a, b, c, d, e] = array;
  //   console.log(a, b, c, d, e);

  console.log(filteredJob);

  return (
    <div>
      <Header />
      <SubHeader />
      <div>Single job page - id {param.id}</div>
    </div>
  );
}

export default Job;
