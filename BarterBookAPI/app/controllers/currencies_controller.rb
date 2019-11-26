class CurrenciesController < ApplicationController
    def index
        currencies = Currency.all
        render json: currencies
    end

    def create
        currency = Currency.new(currency_params)
        if currency.save
            render json: currency
        else
            render json: {errors: currency.errors.full_messages}, status: 403
        end
    end
    
    def show
        currency = Currency.find(params[:id])
        render json: currency
    end

    def update
        currency = Currency.find(params[:id])
        currency.update(currency_params)
        render json: currency
    end

    def destroy
        currency = Currency.find(params[:id])
        Currency.destroy()
    end

    private
    def currency_params
        params.require(:currency).permit(:title, :text, :img_url)
    end
end