activate :blog do |blog|
  blog.permalink = '{title}'
  blog.sources = 'posts/{year}-{month}-{day}-{title}.html'
  blog.layout = 'layout'
  blog.summary_length = 250
  blog.default_extension = '.md'
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = 'blog/{num}'
end

set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :smartypants => true
activate :rouge_syntax

configure :development do
  activate :livereload do
    set :host, '0.0.0.0'
    set :port, '4567'
  end
end

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'

activate :directory_indexes

set :title, 'fernahh.com.br | desenvolvedor e de buenas na web'
set :description, 'Coisas que eu, Luiz Fernando Rodrigues (fernahh), quero que todos saibam, seja sobre música, código, política ou qualquer outro tópico.'

set :build_dir, './build'

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
end
