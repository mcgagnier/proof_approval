UPDATE printing_projects
SET status = $2
WHERE job = $1;