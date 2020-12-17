import GlobalStyles from "./style-utils/global.styles";
import CustomButton from "./components/CustomButton/CustomButton.component.jsx";
import CTABox from "./components/CTABox/CTABox.component.jsx";

import Img1 from "./assets/ezgif-3-dca61092e9f3.jpg";

const TestComponent = () => (
	<div>
		<h1>TESTING COMPONENT</h1>
		<button>Click Here</button>
	</div>
);

function App() {
	return (
		<>
			<GlobalStyles />
			<h2>Hello World</h2>
			<CustomButton>Click me</CustomButton>
			<CTABox
				Component={TestComponent}
				title="Hello World"
				image={Img1}
				orientation="left"
			/>
		</>
	);
}

export default App;
