library(shiny)
library(shiny.material)

ui <- div(
  titlePanel("reactR Input Example"),
  slider_Input("textInput", mainColor = '#885d32'),
  textOutput("textOutput")
)

server <- function(input, output, session) {
  output$textOutput <- renderText({
    sprintf("You entered: %s", input$textInput)
  })

  observeEvent(input$textInput, {
    print(input$textInput)
  })

}

shinyApp(ui, server)
