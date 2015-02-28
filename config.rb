# Blog settings

Time.zone = "Brasilia"

activate :blog do |blog|
  blog.permalink = "{title}.html"
  blog.sources = "posts/{year}-{month}-{day}-{title}.html"
  blog.taglink = "tags/{tag}.html"
  blog.layout = "layout"
  blog.summary_length = 250
  blog.year_link = "{year}.html"
  blog.month_link = "{year}/{month}.html"
  blog.day_link = "{year}/{month}/{day}.html"
  blog.default_extension = ".md"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  blog.paginate = true
  blog.per_page = 10
  blog.page_link = "pagina/{num}"
end

page "/feed.xml", layout: false

# Reload the browser automatically whenever files change

configure :development do
  activate :livereload do
    set :host, '0.0.0.0'
    set :port, '4567'
  end
end

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'

# Build-specific configuration

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
end
