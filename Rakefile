task :deploy do
  system "middleman build"

  cd "./build" do
    system "git add -A"
    system "git commit --allow-empty -m 'Updated at #{Time.now.utc}'"
    system "git push origin master"
  end
end
