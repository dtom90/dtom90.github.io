require 'html-proofer'

task default: %w[html_proofer]

task :html_proofer do
  sh 'bundle exec jekyll build'
  options = {
    assume_extension: true,
    typhoeus: {
      ssl_verifypeer: false
    }
  }
  HTMLProofer.check_directory('./_site', options).run
end

task :dev do
  sh 'bundle exec jekyll serve'
end