build_dir = 'build'

task :deploy do
  rm_rf build_dir
  system 'middleman build'

  cd build_dir do
    system 'git add .'
    message = 'Update at #{Time.now.utc}'
    system 'git commit -m #{message}'
    system 'git push'
  end
end
