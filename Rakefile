build_dir = "build"

task :deploy do
  rm_rf build_dir
  system "middleman build"

  cd build_dir do
    system "git add -A"
    message = "Last deploy on #{Time.now.utc}"
    system "git commit --allow-empty -m '#{message}'"
    system "git push -f"
  end
end
