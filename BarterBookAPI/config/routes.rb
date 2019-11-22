Rails.application.routes.draw do
  resources :users, only: %i[:index, :create, :show, :edit, :delete]
  resources :currencies, only: %i[:index, :create, :show, edit, :delete]
  resources :contracts, only: %i[:index, :create, :show, :delete]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
