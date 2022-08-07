const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component, Fragment } = wp.element;
const {
	PanelBody,
	Button,
	Tooltip,
} = wp.components;
const {
	RichText,
	InspectorControls,
	MediaUpload,
} = wp.editor;

class edit extends Component {
	render() {
		const { attributes, setAttributes } = this.props;
		const { timelineitemsDetails, backgroundImage, isLastItem } = attributes;
		const getImage = (openEvent) => {
			if (backgroundImage) {
				return (
					<Fragment>
						<img
							src={backgroundImage}
							onClick={openEvent}
							className="bgimg-editor"
						/>
						<Button
							onClick={() => {
								setAttributes({ backgroundImage: "", isLastItem: "no" });
							}}
							className="button button-large"
						>
							Remove Image
						</Button>
					</Fragment>
				);
			} else {
				return (
					<div>
						<Button onClick={openEvent} className="button button-large">
							Upload image
						</Button>
					</div>
				);
			}
		};
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={"Last Item Background Image Settings"}
						initialOpen={true}
					>
						<MediaUpload
							onSelect={(media) => {
								setAttributes({
									backgroundImage: media.url,
									isLastItem: "yes",
								});
							}}
							type="image"
							value={backgroundImage}
							render={({ open }) => getImage(open)}
						/>
					</PanelBody>
				</InspectorControls>
				<div className="timeline">
					<div className="timeline__wrapper">
						<div className="timeline__line"></div>
					</div>
					{0 < timelineitemsDetails.length &&
						timelineitemsDetails.map((timelinelistValues, index) => {
							return (
								<Fragment>
									<div
										className={
											"timeline__remove-timelineitem" +
											(timelinelistValues.index % 2 === 0 ? " even" : " odd")
										}
									>
										{" "}
										{1 < timelineitemsDetails.length ? (
											<Tooltip text="Remove main item">
												<span
													className="remove dashicons dashicons-dismiss"
													onClick={() => {
														let timelineitemsDetailsArr = timelineitemsDetails;
														const newObject = [...timelineitemsDetails];
														const timelineitemsDetailsNewArr = newObject
															.filter(
																(item) =>
																	item.index !== timelinelistValues.index
															)
															.map((t) => {
																if (t.index > timelinelistValues.index) {
																	t.index -= 1;
																}
																return t;
															});
														timelineitemsDetailsArr = timelineitemsDetailsNewArr;
														setAttributes({
															timelineitemsDetails: timelineitemsDetailsArr,
														});
													}}
												></span>
											</Tooltip>
										) : (
											""
										)}
									</div>
									<div
										className={
											"timeline__item" +
											(timelinelistValues.index % 2 === 0 ? "--even" : "--odd") +
											(isLastItem === "yes" &&
											timelinelistValues.index ==
												timelineitemsDetails.length - 1
												? " timeline_lastitem"
												: "")
										}
										style={{
											backgroundImage:
												isLastItem === "yes" &&
												timelinelistValues.index ==
													timelineitemsDetails.length - 1
													? `url(${backgroundImage})`
													: "none",
										}}
									>
										{0 < timelinelistValues.extracontentList.length &&
											timelinelistValues.extracontentList.map(
												(subregionValue, subregionindex) => {
													return (
														<Fragment>
															<span
																className={
																	"feature-remove" +
																	(timelinelistValues.index % 2 === 0
																		? " even"
																		: " odd")
																}
																onClick={() => {
																	let timelineitemsDetailsArr = [
																		...timelineitemsDetails,
																	];
																	const newObject = [
																		...timelinelistValues.extracontentList,
																	];
																	const timelineitemsDetailsNewArr = newObject
																		.filter(
																			(item) =>
																				item.index !== subregionValue.index
																		)
																		.map((t) => {
																			if (t.index > subregionValue.index) {
																				t.index -= 1;
																			}
																			return t;
																		});
																	timelineitemsDetailsArr[index][
																		"extracontentList"
																	] = timelineitemsDetailsNewArr;
																	setAttributes({
																		timelineitemsDetails: timelineitemsDetailsArr,
																	});
																}}
															>
																<Tooltip text="Remove inner item">
																	<span className="dashicons dashicons-dismiss"></span>
																</Tooltip>
															</span>
															<div className="timeline__box-inner">
																<RichText
																	tagName="h3"
																	placeholder="Title"
																	keepPlaceholderOnFocus="true"
																	className="subregion-title"
																	value={subregionValue.timelinetitle}
																	onChange={(timelinetitle) => {
																		const newObject = Object.assign(
																			{},
																			subregionValue,
																			{
																				timelinetitle: timelinetitle,
																			}
																		);
																		let timelineitemsDetailsArr = [
																			...timelineitemsDetails,
																		];
																		timelineitemsDetailsArr[index][
																			"extracontentList"
																		][subregionindex] = newObject;
																		setAttributes({
																			timelineitemsDetails: timelineitemsDetailsArr,
																		});
																	}}
																/>
																<RichText
																	tagName="p"
																	placeholder="Description"
																	keepPlaceholderOnFocus="true"
																	className="subregion-desc"
																	value={subregionValue.timelinedesc}
																	onChange={(timelinedesc) => {
																		const newObject = Object.assign(
																			{},
																			subregionValue,
																			{
																				timelinedesc: timelinedesc,
																			}
																		);
																		let timelineitemsDetailsArr = [
																			...timelineitemsDetails,
																		];
																		timelineitemsDetailsArr[index][
																			"extracontentList"
																		][subregionindex] = newObject;
																		setAttributes({
																			timelineitemsDetails: timelineitemsDetailsArr,
																		});
																	}}
																/>
															</div>
														</Fragment>
													);
												}
											)}
										<div className="timeline__inneritem--add">
											<span
												className="components-button add"
												onClick={() => {
													let timelineitemsDetailsArr = timelineitemsDetails;
													const newObject = [
														...timelinelistValues.extracontentList,
														{
															index: timelinelistValues.extracontentList.length,
															timelinetitle: "",
															timelinedesc: "",
														},
													];
													timelineitemsDetailsArr[index][
														"extracontentList"
													] = newObject;
													setAttributes({
														...timelinelistValues.extracontentList,
														timelineitemsDetails: timelineitemsDetailsArr,
													});
												}}
											>
												<span className="add-btn-text"> Add New Items </span>
												<span className="dashicons dashicons-plus-alt"> </span>
											</span>
										</div>
									</div>
								</Fragment>
							);
						})}
					<div className="timeline__item--add">
						<button
							className="components-button add"
							onClick={() => {
								let timelineitemsDetailsArr = timelineitemsDetails;
								const newObject = [
									...timelineitemsDetails,
									{
										index: timelineitemsDetails.length,
										extracontentList: [
											{
												index: 0,
												timelinetitle: "",
												timelinedesc: "",
											},
										],
									},
								];
								timelineitemsDetailsArr = newObject;
								setAttributes({
									timelineitemsDetails: timelineitemsDetailsArr,
								});
							}}
						>
							Add content item{" "}
						</button>
					</div>
				</div>
			</Fragment>
		);
	}
}

registerBlockType("abl/timeline-block", {
	title: "timeline block",
	icon: "editor-ul",
	category: "common",
	attributes: {
		timelineitemsDetails: {
			type: "array",
			default: [
				{
					index: 0,
					extracontentList: [
						{
							index: 0,
							timelinetitle: "",
							timelinedesc: "",
						},
					],
				},
			],
		},
		backgroundImage: {
			type: "string",
			default: null,
		},
		isLastItem: {
			type: "string",
			default: "no",
		},
	},
	edit,
	save({ attributes }) {
		const { timelineitemsDetails, backgroundImage, isLastItem } = attributes;

		return (
			<div className="timeline">
				<div className="timeline-wrapper">
					<div className="timeline-line"></div>
				</div>
				{0 < timelineitemsDetails.length &&
					timelineitemsDetails.map((timelinelistValues, index) => {
						return (
							<div
								className={
									"timeline__item" +
									(isLastItem === "yes" &&
									timelinelistValues.index == timelineitemsDetails.length - 1
										? " timeline_lastitem"
										: "")
								}
								style={{
									backgroundImage:
										isLastItem === "yes" &&
										timelinelistValues.index == timelineitemsDetails.length - 1
											? `url(${backgroundImage})`
											: "none",
								}}
							>
								{0 < timelinelistValues.extracontentList.length &&
									timelinelistValues.extracontentList.map(
										(subregionValue, subregionindex) => {
											return (
												<div className="timeline__box-inner">
													<RichText.Content
														tagName="h3"
														className="subregion-title"
														value={subregionValue.timelinetitle}
													/>
													<RichText.Content
														tagName="p"
														className="subregion-desc"
														value={subregionValue.timelinedesc}
													/>
												</div>
											);
										}
									)}
							</div>
						);
					})}
			</div>
		);
	},
});
