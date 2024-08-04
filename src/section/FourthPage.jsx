const FourthPage = () => {
    return (
      <div className="h-screen flex flex-row justify-center items-center max-container">
        <div className="w-1/2 flex flex-col gap-5 h-full justify-center ">
          <h2 className="text-[70px]">Commenting made easy</h2>
          <p className="text-[20px] w-9/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis sunt mollitia quibusdam obcaecati quidem animi cupiditate similique accusantium possimus!</p>
          
        </div>
        <div className="vertical-line self-center" />
        <div className="w-1/2 flex justify-center">
            <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-9/12" alt="" />
        </div>
      </div>
    );
  };
  
  export default FourthPage;