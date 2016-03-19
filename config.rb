# Blog
activate :blog do |blog|
  blog.permalink = "{title}"
  blog.sources = "posts/{year}-{month}-{day}-{title}.html"
  blog.layout = "layout"
  blog.summary_length = 250
  blog.default_extension = ".md"
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = "blog/{num}"
end

# Livereload
configure :development do
  activate :livereload do
    set :host, '0.0.0.0'
    set :port, '4567'
  end
end

# Assets
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
sprockets.append_path File.join root.to_s, "source/assets/components"

activate :directory_indexes

# Globals
set :title, '@fernahh | desenvolvedor e de buenas na web'
set :description, 'Coisas que eu, @fernahh, quero que todos saibam, seja sobre música, código, política ou café.'

# Build
set :build_dir, '../fernahh.github.io'

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
end
