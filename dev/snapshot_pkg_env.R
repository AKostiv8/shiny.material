library(renv)

file_path <- file.path(getwd(), 'renv.lock')
renv::snapshot(lockfile = file_path, type = 'all', prompt = FALSE)

message(paste0(Sys.time(), ': renv.lock has been updated...'))
