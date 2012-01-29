set :application, "colorbars"
set :repository,  "git@github.com:darksheik/colorbars.git"

set :scm, :git
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

role :web, "donpflaster.com"                          # Your HTTP server, Apache/etc
role :app, "donpflaster.com"                          # This may be the same as your `Web` server
role :db,  "donpflaster.com", :primary => true # This is where Rails migrations will run

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

set :deploy_to, "/home/donpflas/#{application}"
set :user, "donpflas"
set :use_sudo, false

after "deploy", "deploy:bundle_gems"
#after "deploy", "deploy:bundle_gems"
after "deploy:bundle_gems", :roles => [:web, :db, :app] do
  run "chmod 755 #{release_path}/public -R" 
end
after "deploy:bundle_gems", "deploy:restart"
after 'deploy:update_code' do
  run "cd #{release_path}; RAILS_ENV=production rake assets:precompile"
end

# If you are using Passenger mod_rails uncomment this:
 namespace :deploy do
   task :bundle_gems do
     run "cd #{deploy_to}/current && bundle install vendor/gems"
   end
   task :start do ; end
   task :stop do ; end
   task :restart, :roles => :app, :except => { :no_release => true } do
     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
   end
 end