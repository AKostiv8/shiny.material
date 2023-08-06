library(shiny)
library(shiny.material)

ui <- div(
  titlePanel("reactR Input Example"),
  slider_Input("textInput", mainColor = '#885d32'),
  toggl_btn_Input('switch', label = 'Mean value', mainColor = '#885d32', fontColor = '#33d432'),
  textOutput("textOutput")
)

server <- function(input, output, session) {
  output$textOutput <- renderText({
    sprintf("You entered: %s", input$textInput)
  })

  observeEvent(input$switch, {
    if(input$switch) {
      updateSlider_Input(session = getDefaultReactiveDomain(),
                         inputId = 'textInput',
                         configuration = list(
                           disabled       =  TRUE,
                           # value          =  NULL,
                           mainColor = '#885d32'
                         )
      )
    } else {
      updateSlider_Input(session = getDefaultReactiveDomain(),
                         inputId = 'textInput',
                         configuration = list(
                           disabled       =  FALSE,
                           # value          =  NULL,
                           mainColor = '#885d32'
                         )
      )
    }

  })

}

shinyApp(ui, server)
