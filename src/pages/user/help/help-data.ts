import {
    HelpImgDepositHelp,
    HelpImgDepositInfo,
    HelpImgDepositTime,
} from '../../../assets/images';

export const helpList = [
    {
        id: 1,
        image: HelpImgDepositHelp,
        title: 'Need Help With Deposits?',
        content: [
            `No problem. Depositing money into your Manilla wallet is easy. Once we know a little bit more about you (aka verifying your identity), follow the steps below and you’re good to go:`,
            `Sign in to the Manilla app`,
            `Select Wallets from the menu`,
            `On your local currency wallet, select Deposit`,
            `Choose between the available deposit methods and follow the prompts`,
            `Once we receive your deposit, we’ll send you a notification so you can continue to buy crypto`,
            `Want to deposit right now? Great! Select DEPOSIT NOW below.`,
        ],
        date: ` 26 May 2021`,
    },
    {
        id: 2,
        image: HelpImgDepositTime,
        title: 'How Long Until My Deposit Shows In My Manilla Wallet?',
        content: [
            `When you make a deposit, it may take some time for your money to arrive with us. We will allocate your deposit as soon as it arrives and we’ll send you an email notification (or push notification if you use our app). The times below shows how long it takes to allocate deposits in your country.`,
            `Note`,
            `Bank deposits are not processed on weekends or public holidays. If you deposit using your saved credit or debit card, the money you deposited should reflect instantly.`,
            `Make sure that your unique reference number, also known as a BX reference (or in some countries, your unique deposit amount) is 100% correct before you make a deposit. Include your BX reference number for bank transfers.`,
            `We don't accept deposits from third parties, payments must be made in your own name which has been verified with Manilla Finance.`,
        ],
        table: {
            header: [
                'Currency',
                'Deposit allocation time',
            ],
            body: [
                [
                    'AUD',
                    'Up to 48 hours',
                ],
                [
                    'IDR',
                    'Up to 24 hours',
                ],
                [
                    'MYR',
                    'Up to 24 hours',
                ],
                [
                    'SGD',
                    'Up to 5 hours',
                ],
                [
                    'NGN',
                    'Up to 24 hours',
                ],
                [
                    'ZAR',
                    'Up to 48 hours',
                ],
                [
                    'EUR',
                    'Up to 48 hours',
                ],
                [
                    'UGX',
                    'Same day (Stanbic Bank) Up to 48 hours (other banks)',
                ],
            ],
        },
        date: ` 26 May 2021`,
    },
    {
        id: 3,
        image: HelpImgDepositInfo,
        title: 'Things You Need To Know About Deposits',
        content: [
            `As with any service, there are a few basic requirements in linking your bank account to your Manilla wallet:
            Deposits must be made using a bank account that belongs to the same person who owns the Manilla wallet.
            In other words, the bank account must be in your name.`,
            `Do not deposit money using a friend or family member’s bank account.
            If you wish to use a company bank account to make deposits from Manilla, please apply for a company account at Manilla Finance.`,
            `Enter the correct reference number in the payment reference field (if applicable).
            It can take up to two business days for your money to show in your Manilla wallet under certain circumstances.`,
            `Please be patient. If it has taken longer than that, please upload a proof of payment here.`,
            `Note:`,
            `Please note that international deposits aren't allowed. Deposits should come from a bank account registered in the same country that you're verified in. International deposits will be reversed back to the depositor, and those reversals may incur a reversal fee. Banks charge these fees due to the fact that they need to do a conversion between the two currencies, which means that it may impact the balance that is returned to the depositor.`,
            `Proof of Payment`,
            `Your proof of payment must show the following information:`,
            `Your full name`,
            `Amount of deposit`,
            `Date of deposit`,
            `Reference number used in the recipient’s reference field (if applicable)`,
            `The following will not be accepted as proof of payment:`,
            `SMS/Text messages`,
            `Bank statements`,
            `Proof of payment notifications`,
        ],
        date: ` 26 May 2021`,
    },
];