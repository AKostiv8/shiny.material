library(reactR)

create_material_react_shiny_component <- function(component_name) {
  reactR::scaffoldReactShinyInput(
    component_name,
    list(
      "@mui/material" = "^5.10.12"
    )
  )
}

# Create Material Slider
# create_material_react_shiny_component('slider')
# create_material_react_shiny_component('toggl_btn_')
# create_material_react_shiny_component('toggl_btn_group_')
# create_material_react_shiny_component('modal_')

create_material_react_shiny_component_widget <- function(component_name) {
  reactR::scaffoldReactWidget(
    component_name,
    list(
      "@mui/material" = "^5.10.12"
    ),
    edit = FALSE
  )
}

# Create Material Component
# create_material_react_shiny_component_widget('modal_window')

