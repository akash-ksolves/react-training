import Data from "./Components/Data";

function App() {
	return (
		<div className="container">
			<h1 className="mb-5">Assignment 3rd</h1>

			<div className="row">
				<Data
					title="For REST data"
					btnTitle="Get REST Data"
					btnClass="btn btn-primary"
					isRest
				/>

				<Data
					title="For SOAP data"
					btnTitle="Get SOAP Data"
					btnClass="btn btn-success"
				/>
			</div>
		</div>
	);
}

export default App;
