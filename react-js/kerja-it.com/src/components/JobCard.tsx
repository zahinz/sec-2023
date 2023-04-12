function JobCard(props: any) {
  return (
    <div className="border p-4 rounded-md w-[350px] space-y-4">
      <div>
        <h4 className="text-xl font-medium">{props.job}</h4>
        <p>{props.company}</p>
      </div>
      <div>
        <p>🗓 Posted on 31st Mar 2023</p>
        <p>📍 Kuala Lumpur</p>
        <p>💼 Full time</p>
      </div>
      <div className="space-x-1">
        <p className="bg-gray-200 py-1 px-2 inline-block rounded">
          Kuala Lumpur
        </p>
        <p className="bg-gray-200 p-1 inline-block rounded">React JS</p>
      </div>
      <p>Added on 31st March 2023</p>
    </div>
  );
}

export default JobCard;
