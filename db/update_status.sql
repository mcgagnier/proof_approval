UPDATE printing_projects
SET status = true
WHERE job = $1;