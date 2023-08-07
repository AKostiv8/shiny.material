#' Toggl Group Button
#'
#' Toggl Group button
#'
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
toggl_btn_group_Input <- function(
    inputId,
    value,
    fontColor = '#ffffff',
    mainColor = '#e05151'
) {
  reactR::createReactShinyInput(
    inputId,
    "toggl_btn_group",
    htmltools::htmlDependency(
      name = "toggl_btn_group-input",
      version = "1.0.0",
      src = "www/shiny.material/main_bundle",
      package = "shiny.material",
      script = "bundle.js"
    ),
    default = value,
    list(
      fontColor = fontColor,
      mainColor = mainColor
    ),
    htmltools::tags$div
  )
}

#' Update Toggl Group Button
#'
#' Update Toggl Group button
#'
#' @export
updateToggl_btn_group_Input <- function(session, inputId, value, configuration = NULL) {
  message <- list(value = value)
  if (!is.null(configuration)) message$configuration <- configuration
  session$sendInputMessage(inputId, message);
}
