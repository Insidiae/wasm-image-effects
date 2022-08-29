import init, { grayscale } from "my-crate";
//? Don't worry if vscode told you can't find my-crate
//? It's because you're using a local crate
//? after yarn dev, wasm-pack plugin will install my-crate for you

init().then(() => {
	const input = document.getElementById("upload") as HTMLInputElement;
	const newImgContainer = document.getElementById(
		"new-img"
	) as HTMLImageElement;
	const fileReader = new FileReader();

	fileReader.onloadend = () => {
		const base64 = (fileReader.result as string).replace(
			/^data:image\/(png|jpeg|jpg);base64,/,
			""
		);
		let img_data_url = grayscale(base64);

		newImgContainer.src = img_data_url;
	};

	input.addEventListener("change", () => {
		fileReader.readAsDataURL((input.files as FileList)[0]);
	});
});

