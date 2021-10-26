import React, { useEffect } from "react";
import anime from "animejs";
import "./Kuberneteca.css";

export default function Kuberneteca() {
	useEffect(() => {
		anime({
			targets: ".kuberneteca",
			translateX: "95%",
			duration: 3000,
			loop: true,
			easing: "easeInOutExpo",
			direction: "alternate",
		});
        anime({
			targets: ".kuberneteca-container",
			duration: 3000,
			loop: true,
			easing: "easeInOutExpo",
			direction: "alternate",
            borderColor: ["#0f0", "#f00", "#00f"]
		});
	}, []);

	return (
		<div className="kuberneteca-container">
			<p className="kuberneteca">Kuberneteca</p>
		</div>
	);
}
