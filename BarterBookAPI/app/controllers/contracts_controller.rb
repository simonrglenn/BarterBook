class ContractsController < ApplicationController
    def index
        contracts = Contract.all
        render json: contracts
    end

    def create
        contract = Contract.new(contract_params)
        if contract.save
            render json: contract
        else
            render json: {errors: contract.errors.full_messages}, status: 403
        end
    end
    
    def show
        contract = Contract.find(params[:id])
        render json: contract
    end

    def destroy
        contract = Contract.find(params[:id])
        contract.destroy()
    end

    private
    def contract_params
        params.require(:contract).permit(:needed_id, :offered_id, :pending?)
    end
end