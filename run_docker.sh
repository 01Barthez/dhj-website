# 1. Stop & remove the old container
docker stop dhj-school
docker rm   dhj-school

# 2. Rebuild your image (tag it "dhj-school")
docker build -t dhj-school .

# 3. Run a fresh container
docker run -d \
  --name dhj-school \
  -p 8088:80 \
  dhj-school
