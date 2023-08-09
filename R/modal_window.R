#' Modal
#'
#' Create modal
#'
#' @import htmlwidgets
#'
#' @export
modal_window <- function(item_id, windowCondition = TRUE, input_id_cancel = 'cancel_modal', input_id_add = 'added_note_info',  obj = NULL, ...) {

  configuration <- list(
    item_id = item_id,
    windowCondition = windowCondition,
    obj = obj,
    input_id_cancel = input_id_cancel,
    input_id_add = input_id_add,
    # projectionScale    = projectionScale,
    ...
  )

  component <- reactR::reactMarkup(reactR::component("ModalWindowTag", configuration))


  # create widget
  htmlwidgets::createWidget(
    name = 'modal_window',
    component,
    width = NULL,
    height = '400px',
    package = 'shiny.material',
    elementId = NULL
  )
}

#' Called by HTMLWidgets to produce the widget's root element.
#' @noRd
widget_html.modal_window <- function(id, style, class, ...) {
  htmltools::tagList(
    # Necessary for RStudio viewer version < 1.2
    reactR::html_dependency_corejs(),
    reactR::html_dependency_react(),
    reactR::html_dependency_reacttools(),
    htmltools::tags$div(id = id, class = class, style = style)
  )
}

#' Shiny bindings for modal_window
#'
#' Output and render functions for using modal_window within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a modal_window
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name modal_window-shiny
#'
#' @export
modal_windowOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'modal_window', width, height, package = 'shiny.material')
}

#' @rdname modal_window-shiny
#' @export
renderModal_window <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, modal_windowOutput, env, quoted = TRUE)
}
