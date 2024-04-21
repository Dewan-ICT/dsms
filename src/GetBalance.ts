import axios from "axios";
import handleSMSError from "./ErrorHandler";
const numberPattern = /\d+/;

async function GetBalance(api_key: string) {
  try {
    const BalanceResponse = await axios.get(
      `http://sms.dewanict.com/miscapi/${api_key}/getBalance`
    );
    if (BalanceResponse.data.indexOf("Error") !== -1) {
      const errorCode = BalanceResponse.data.match(numberPattern);
      throw new Error(handleSMSError(errorCode));
    } else {
      return BalanceResponse.data;
    }
  } catch (error) {
    throw error;
  }
}

export default GetBalance;
