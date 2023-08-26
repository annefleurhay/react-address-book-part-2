function Form(){
    return (
        <div>
            <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/>

        <label for="street">Street:</label>
        <input type="text" id="street" name="street" required/>

        <label for="city">City:</label>
        <input type="text" id="city" name="city" required/>

        <input type="submit" value="Submit"/>
    </form>
        </div>
    )
}

export default Form