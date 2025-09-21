export default function CoreConcept(props) {
  /*
  We should remember the alt value of a <img> element is just normal text that describes the image
  in order to know what the image goes about in case of not being uploaded.
  */
  let title= props["title"]; //we could also just write into the <h3> tag: {props.title}
  let description= props["description"]; //we could also just write into the <p> tag: {props.description}
  let image= props["image"]; //we could also just write into the src attribute <img> tag: {props.img}
  return (
  <li>
    <img src={image} alt={title} /> 
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
  );
}

function AnotherCoreConceptComponent({image, title, description}) {
  //We're going to use the props destructuring in the function parameters. If we passed more props than expected, there would be 
  //no problem as they would be ignored silently. We also could use this expression: ({title, description, ...rest}) to save in rest the extra arguments 
  return (
  <li>
    <img src={image} alt="..." />
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
  );
}