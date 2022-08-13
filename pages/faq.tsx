import { DISCORD_URL } from 'components/common/constants';
import Heading from 'components/common/Heading';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { defaultSEO } from 'utils/next-seo.config';

const About: NextPage = () => {
  return (
    <>
      <NextSeo
        {...defaultSEO}
        title="Revoke.cash - Frequently asked questions"
        description="Answers to all your questions surrounding allowances, Revoke.cash and wallet security."
      />
      <div
        style={{
          textAlign: 'left',
          fontSize: '18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxWidth: '800px',
          margin: 'auto',
        }}
      >
        <Heading text="Frequently Asked Questions" type="h2" center />

        <div>
          <Heading text='If I have an "Unlimited" allowance, does that mean my whole wallet is at risk?' type="h4" />
          No. An "unlimited" allowance only applies to the token or NFT collection that you gave an allowance for. So if
          you gave an unlimited allowance for your DAI, then <span style={{ fontStyle: 'italic' }}>
            all your DAI
          </span>{' '}
          may be at risk, but none of your USDC. Similarly an "unlimited" allowance for your Bored Apes does not impact
          your Cool Cats.
        </div>

        <div>
          <Heading text='Is it enough to "disconnect" my wallet instead of revoking allowances?' type="h4" />
          No. Disconnecting your wallet (e.g. MetaMask) does not do{' '}
          <span style={{ fontStyle: 'italic' }}>anything</span> to protect you from allowance exploits - or most other
          exploits. The only thing that happens when disconnecting your wallet from a website is that that website
          cannot see your address any more. But your allowances stay active.
        </div>

        <div>
          <Heading text="Can hardware wallets save me from allowance exploits?" type="h4" />
          No. In general, hardware wallets are much safer than mobile or browser-based wallets because the wallet's keys
          are securely stored on the device, making it impossible to steal the keys without proper access to the device.
          But with allowances no one <span style={{ fontStyle: 'italic' }}>needs</span> to steal your keys to take your
          tokens. And because of that hardware wallets offer no extra protection against allowance exploits.
        </div>

        <div>
          <Heading text="Can I revoke multiple allowances at the same time?" type="h4" />
          No. The way allowances work under the hood <span style={{ fontStyle: 'italic' }}>requires</span> 1 transaction{' '}
          per allowance. So it is technically impossible to revoke multiple allowances in a single transaction.
        </div>

        <div>
          <Heading text="My funds were just stolen, can I use Revoke.cash to get them back?" type="h4" />
          No. Revoke.cash is a <span style={{ fontStyle: 'italic' }}>preventative</span> tool that helps you practice
          proper wallet hygiene. By regularly revoking active allowances you reduce the chances of becoming the victim
          of allowance exploits. But unfortunately it cannot be used to recover any stolen funds.
        </div>

        <div>
          <Heading
            text='Why does my wallet pop-up mention "approve" or "set approval for all" when revoking?'
            type="h4"
          />
          In the tokens' smart contracts, the functions for approving and revoking allowances are the same function. The
          difference is that you set the allowance to 0 (for ERC20 tokens) or "false" (for NFTs) when revoking the
          allowance. You can verify that Revoke.cash is actually revoking the allowance by clicking "Edit Permission"
          (for ERC20 allowances), or the "data" tab (for NFTs) in MetaMask.
        </div>

        <div>
          <Heading text="How do I know if my funds were stolen through an allowance exploit?" type="h4" />
          If your tokens or NFTs were taken from your wallet without you sending an explicit transaction to do so, it is
          almost always because of allowances. But if your ETH was also stolen, then it most likely points to a
          compromised seed phrase and you need to migrate to a completely new wallet.
        </div>

        <div>
          <Heading text="Which allowances do I need to revoke?" type="h4" />
          Choosing which allowances to revoke is always a trade-off between safety and convenience. For certain
          well-known protocols (e.g. Uniswap) it is most likely fine to leave allowances active, but for newer and
          unknown smart contracts, it is more prudent to revoke allowances. Also keep in mind that some use cases
          require you to keep your allowances active. For example, if you have active listings on OpenSea you need to
          keep the allowances in order for the listings to remain active.
        </div>

        <div>
          <Heading text="Can you support chain X on Revoke.cash?" type="h4" />
          Potentially. Most EVM-based chains are already supported, but if you would like to see Revoke.cash support any
          additional chains, please{' '}
          <a href="https://github.com/rkalis/revoke.cash/issues/new" target="_blank">
            open an issue on GitHub
          </a>{' '}
          or reach out on{' '}
          <a href="https://twitter.com/RevokeCash" target="_blank">
            Twitter
          </a>{' '}
          or{' '}
          <a href={DISCORD_URL} target="_blank">
            Discord
          </a>
          .
        </div>

        <div>
          <Heading text="My question is not listed here" type="h4" />
          If you have any questions that aren't mentioned in this FAQ, please reach out on{' '}
          <a href="https://twitter.com/RevokeCash" target="_blank">
            Twitter
          </a>{' '}
          or{' '}
          <a href={DISCORD_URL} target="_blank">
            Discord
          </a>
          .
        </div>
      </div>
    </>
  );
};

export default About;
