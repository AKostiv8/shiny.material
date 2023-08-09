#' Modal
#'
#' Create
#'
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
modal_Input <- function(inputId, default = "") {
  reactR::createReactShinyInput(
    inputId,
    "modal",
    htmltools::htmlDependency(
      name = "modal-input",
      version = "1.0.0",
      src = "www/shiny.material/main_bundle",
      package = "shiny.material",
      script = "bundle.js"
    ),
    default,
    list(),
    htmltools::tags$span
  )
}

#' Modal
#'
#' Create
#'
#' @export
updateModal_Input <- function(session, inputId, value, configuration = NULL) {
  message <- list(value = value)
  if (!is.null(configuration)) message$configuration <- configuration
  session$sendInputMessage(inputId, message);
}
