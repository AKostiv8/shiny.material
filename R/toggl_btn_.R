#' Toggl Button
#'
#' Create toggle button
#'
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
toggl_btn_Input <- function(
    inputId,
    label,
    default = TRUE,
    # checked = FALSE,
    labelPlacement = c("end", "start", "top", "bottom"),
    fontColor = '#ffffff',
    mainColor = '#e05151'
) {

  labelPlacement <- match.arg(labelPlacement)

  reactR::createReactShinyInput(
    inputId,
    "toggl_btn",
    htmltools::htmlDependency(
      name = "toggl_btn-input",
      version = "1.0.0",
      src = "www/shiny.material/main_bundle",
      package = "shiny.material",
      script = "bundle.js"
    ),
    default = default,
    list(
      # checked = checked,
      label = label,
      labelPlacement = labelPlacement,
      fontColor = fontColor,
      mainColor = mainColor
    ),
    htmltools::tags$div
  )
}

#' Update toggl button
#'
#' Material toggl button
#'
#' @export
updateToggl_btn_Input <- function(session, inputId, value, configuration = NULL) {
  message <- list(value = value)
  if (!is.null(configuration)) message$configuration <- configuration
  session$sendInputMessage(inputId, message);
}
