import { useAppContext } from "../hooks/hooks";

function Game() {
	const { dispatch } = useAppContext();

	console.log("Render GameScreen");

	function callDispatch() {
		console.log("callDispatch");
		dispatch({ type: "TEST_RENDER" });
	}

	return (
		<div className="flex h-screen w-full py-2 bg-red-300">
			<main className="flex w-full px-20 text-center bg-blue-300">
				<div className="min-w-full mt-2">
					GameScreen
					<button
						className="bg-indigo-500 border-2"
						onClick={callDispatch}
					>
						Call dispatch ...
					</button>
				</div>
			</main>
		</div>
	);
}

export default Game;
