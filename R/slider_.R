#' Slider
#'
#' Material Slider
#'
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
slider_Input <- function(
    inputId,
    default = 2010,
    secondaryColor = '#ffffff',
    mainColor = '#e05151'
) {
  reactR::createReactShinyInput(
    inputId,
    "slider",
    htmltools::htmlDependency(
      name = "slider-input",
      version = "1.0.0",
      src = "www/shiny.material/main_bundle",
      package = "shiny.material",
      script = "bundle.js"
    ),
    default = default,
    list(
      secondaryColor = secondaryColor,
      mainColor = mainColor
    ),
    htmltools::tags$div
  )
}

#' Update Slider
#'
#' Update Material Slider
#'
#' @export
updateSlider_Input <- function(session, inputId, configuration = NULL) {
  # message <- list(value = value)
  message <- list()
  if (!is.null(configuration)) message$configuration <- configuration
  session$sendInputMessage(inputId, message);
}
# updateSlider_Input <- function(session, inputId, value, configuration = NULL) {
#   message <- list(value = value)
#   if (!is.null(configuration)) message$configuration <- configuration
#   session$sendInputMessage(inputId, message);
# }


