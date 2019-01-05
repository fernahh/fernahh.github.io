activate :i18n, :mount_at_root => :pt_br

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

set :title, 'Olá, eu sou o @fernahh!'
set :description, 'Sou um desenvolvedor de software morando em Joinville, Santa Catarina. Atualmente trabalho construindo ferramentas para aumentar a produtividade
do time de engenharia da Conta Azul.'

set :build_dir, './build'

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
end
