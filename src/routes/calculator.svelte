<script>
  export async function load({page, fetch, session, context}) {
    console.log('--', page,fetch,session,context)
    return {
      annual_income: 0.00
    }
  }
</script>

<main class="flex items-center justify-center">
    <div class="flex flex-col w-full rounded-lg shadow bg-white sm:w-1/2 lg:max-w-xl">
        <h1
                class="m-0 py-2 px-4 font-thin text-3xl text-white bg-green-700 rounded-t"
        >
            Currency Converter
        </h1>
        <div class="flex flex-col items-center justify-center w-full pt-4">
            <label for="amountToConvert">Amount to convert:</label>
            <input
                    id="amountToConvert"
                    class="block py-2 px-3 leading-6 border border-gray-300 rounded"
                    name="amountToConvert"
                    type="number"
                    min="0"
                    placeholder="Amount"
            />
        </div>

        <div class="flex items-center w-full h-full py-4 text-center">
            <div class="flex flex-col items-center w-3/5 px-4 sm:w-full">
                <label for="fromCurrency">Convert From:</label>
                <input
                        id="fromCurrency"
                        class="block w-full py-2 px-3 leading-6 border border-gray-300 rounded"
                        name="fromCurrency"
                        maxlength="3"
                        list="fromCurrencyList"
                />
                <datalist id="fromCurrencyList">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </datalist>
            </div>

            <button
                    class="flex items-center justify-center m-0 bg-transparent border-2
        border-transparent pointer focus:border-gray-300"
            >
                <svg
                        class="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                >
                    <path
                            d="M377.941
            169.941V216H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029
            239.029c-9.373 9.373-9.373 24.568 0 33.941l86.059 86.059c15.119
            15.119 40.971 4.411 40.971-16.971V296h243.882v46.059c0 21.382 25.851
            32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.568
            0-33.941l-86.059-86.059c-15.119-15.12-40.971-4.412-40.971 16.97z"
                    />
                </svg>
            </button>

            <div class="flex flex-col items-center w-3/5 px-4 sm:w-full">
                <label for="toCurrency">Convert To:</label>
                <input
                        id="toCurrency"
                        class="block w-full py-2 px-3 leading-6 border border-gray-300 rounded"
                        name="toCurrency"
                        maxlength="3"
                        list="toCurrencyList"
                />
                <datalist id="toCurrencyList">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </datalist>
            </div>
        </div>

        <div class="flex flex-wrap justify-center w-full pb-2">
            <p>Conversion Result Goes Here.</p>
        </div>

    </div>
</main>
