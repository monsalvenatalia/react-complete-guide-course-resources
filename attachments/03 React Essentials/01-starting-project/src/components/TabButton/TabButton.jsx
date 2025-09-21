export default function TabButton({children, onSelect, isSelected}) {
    /*
    Every custom component does receive props, even if we're not setting any attributes React will give us such a props object. It will 
    just be an empty object, but not entirely empty, there's a prop that we will always get the special children prop. It refers to the content we have
    between our components tags. It could be some text, or some complex JSX structure. 

    We could do it by using inside props.children or by doing some destructuring ({children}) within the function declaration. 

    In React the way of adding event listeners to elements by adding a special attribute/prop to the element. The built-in elements support many on-() events.
    The given value for a prop event should be a function, because it'll contain the code/functionality that'll get executed when that event occurs. The best practice
    is to add the inserted function inside the component, this'll give us the advantage of having access to the component's props and state.

    When we're inserting inside the curly braces of the event prop the function name, we don't add parentheses as we don't want us to execute the function, but React will.

    In order to highlighta button that's in use we can add a style by using the className attribute. This attribute is called differently compared to how it is called in regular
    HTML (class). Luckily most of the attributes are called the same way. If we want to activate a class in case something happens, and not instead, we can assign as the className
    the '' empty string or undefined while using ternary operators. 

    */

    return (
        <li>
            <button className={isSelected? 'active': undefined} onClick={onSelect}>{children}</button>
        </li>
    )
}