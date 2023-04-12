import JobCard from "../components/JobCard";
import MyBlackButton from "../components/MyBlackButton";
import MyButton from "../components/MyButton";
import JobData from "../assets/job-directory-data.json";

function Home() {
  // import job json data
  // using the data to replicate job card
  console.log(JobData);

  // every react function must return a TSX
  return (
    <div>
      {/* header */}
      <div className="flex justify-between items-center mx-[200px] h-[80px]">
        <h1 className="text-xl font-bold">Kerja-IT</h1>
        <div className="space-x-2">
          <MyButton text="Talents" />
          <MyButton text="Post jobs" />
          <MyBlackButton text="Zahin Zulkipli" />
        </div>
      </div>
      {/* subheader */}
      <div className="flex justify-between items-center px-[200px] h-[80px] bg-blue-700">
        <p className="text-white">
          🚨 Your profile is invisible – employers can't find you.
        </p>
        <MyButton text="Edit my profile" />
      </div>
      {/* hero */}
      <div className="h-auto py-10 flex justify-center items-center flex-col space-y-4">
        <h1 className="text-3xl font-bold">Find Tech Jobs In Malaysia 🇲🇾</h1>
        <p>Let employers find you. Or apply to companies directly.</p>
        <div className="space-x-2">
          <MyBlackButton text="🎯 I want companies to find me" />
          <MyButton text="🔍 Search Jobs" />
        </div>
      </div>
      {/* Cards container */}
      <div className="flex justify-center items-center flex-wrap gap-4">
        {/* Job card */}
        {JobData.map(() => {
          return <JobCard />;
        })}
      </div>
    </div>
  );
}

export default Home;
