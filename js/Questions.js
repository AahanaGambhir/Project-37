class Question{
    constructor() {
        this.title = createElement('h1')
        this.question = createElement('h2')
        this.option1 = createElement('h2')
        this.option2 = createElement('h2')
        this.input1 = createInput("Your Name")
        this.input2 = createInput("Answer")
        this.button = createButton("Submit")
        this.answer = createElement("h1")
    }

    hide() {
        this.title.hide()
        this.question.hide()
        this.option1.hide()
        this.option2.hide()
        this.input1.hide()
        this.input2.hide()
        this.button.hide()
    }

    display() {
        this.title.html("Quick Quiz")
        this.title.position(753, 100)

        this.question.html("Who is the richest person in the world as of today ?")
        this.question.position(100, 200)

        this.option1.html("1.) Elon Musk")
        this.option1.position(100, 280)

        this.option2.html("2.) Jeff Bezos")
        this.option2.position(100, 350)

        this.input1.position(300, 450)
        this.input2.position(500, 450)

        this.button.position(600, 500)

        this.button.mousePressed(()=>{
            this.title.hide()
            this.question.hide()
            this.option1.hide()
            this.option2.hide()
            this.input1.hide()
            this.input2.hide()
            this.button.hide()
            this.answer.html("The Answer Is Jeff Bezos")
            this.answer.position(600, 200)
        })
        
    }
}