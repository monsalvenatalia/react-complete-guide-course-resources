export default function Tabs({ buttons, children, buttonsContainer = 'menu'}) {
    const ButtonsContainer = buttonsContainer; //we could also pass a prop with that starts with an uppercase character, so that we 
    //don't need to map it to a variable 
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ ButtonsContainer>
            {children}
        </>
    )
}