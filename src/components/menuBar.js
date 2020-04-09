import React from "react";
import "../style/main.css";

const MenuBar = () => {
	return (
		<section class="bottom-bar">
			<section class="align">
				<nav class="navigation navigation--inline">
					<ul>
						<li>
							<a
								href="https://www.t.me/itsvinayak"
								class="Telegram fa fa-telegram"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span class="invisible">Telegram</span>
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/itsvinayak/"
								class="linkedin fa fa-linkedin"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span class="invisible">linkedin</span>
							</a>
						</li>
						<li>
							<a
								href="https://github.com/itsvinayak"
								class="Github fa fa-github"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span class="invisible">Github</span>
							</a>
						</li>
						<li>
							<a
								href="whatsapp://tel:9259888898"
								target="_blank"
								class=" whatsapp fa fa-whatsapp"
								rel="noopener noreferrer"
							>
								<span class="invisible">Join</span>
							</a>
						</li>
					</ul>
				</nav>
			</section>
		</section>
	);
};

export default MenuBar;
