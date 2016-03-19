task :deploy do
  build_dir = "../fernahh.github.io"
  system "middleman build"

  cd build_dir do
    system "git add -A"
    message = "Last deploy on #{Time.now.utc}"
    system "git commit -m '#{message}'"
    system "git push"
  end
end
