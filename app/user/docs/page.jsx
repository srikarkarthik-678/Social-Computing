import React from "react";

const page = () => {
  return (
    <div className="docscontains p-6">
      <div className="docscontent max-w-3xl mx-auto">
        <div className="content flex flex-col gap-6 text-lg leading-relaxed">
          <section>
            <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
            <p>
              Welcome to the Social Proof Engine, an interactive deception-detection
              game where users analyze claims, add evidence, and vote
              collectively. By using this platform, you agree to the following
              Terms & Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or playing the game, you confirm that you understand and
              agree to follow all rules and conditions listed here. If you do not
              agree, you must stop using the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-4">2. User Responsibility</h2>
            <p className="font-semibold mt-2">✔ Provide honest participation</p>
            <p>Submit truthful evidence, fair annotations, and genuine voting decisions.</p>

            <p className="font-semibold mt-2">✔ Respect other users</p>
            <p>Avoid harassment, threats, or any kind of abusive behavior.</p>

            <p className="font-semibold mt-2 text-red-600">❌ No abusive, offensive, or hateful language</p>
            <p>Using such language may lead to:</p>
            <ul className="list-disc ml-6">
              <li>Temporary suspension</li>
              <li>Permanent account ban</li>
              <li>Removal from leaderboards and reputation systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-4">3. Evidence and Annotations</h2>
            <p>All submitted evidence must be:</p>
            <ul className="list-disc ml-6">
              <li>Relevant</li>
              <li>Non-fraudulent</li>
              <li>Free from harmful or illegal content</li>
            </ul>
            <p>The platform may remove any evidence that violates guidelines.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-4">4. Reputation & Voting System</h2>
            <ul className="list-disc ml-6">
              <li>Accurate users earn reputation points.</li>
              <li>High-reputation users have more voting influence.</li>
              <li>Incorrect votes may reduce reputation.</li>
            </ul>
            <p>Abuse or manipulation of this system is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-4">5. Prohibited Activities</h2>
            <ul className="list-disc ml-6">
              <li>Intentionally spreading misinformation</li>
              <li>Bullying or attacking other users</li>
              <li>Using bots or automated tools</li>
              <li>Manipulating leaderboards or reputation</li>
              <li>Uploading harmful or illegal content</li>
            </ul>
            <p>Violating these rules may result in a permanent ban.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-4">6. Leaderboards & Rewards</h2>
            <p>
              Leaderboards and achievements are for learning and engagement. They may
              be modified or reset at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-4">7. Account Suspension or Ban</h2>
            <p>We may suspend or permanently ban accounts that violate:</p>
            <ul className="list-disc ml-6">
              <li>Terms & Conditions</li>
              <li>Game rules</li>
              <li>Community guidelines</li>
            </ul>
            <p>This includes abusive language, cheating, spamming, or misleading evidence.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-4">8. Privacy and Data Use</h2>
            <p>
              User contributions may be used to improve the platform. No unethical
              data practices will take place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-4">9. Modifications to Terms</h2>
            <p>
              These terms may be updated anytime. Continued use of the platform
              implies acceptance.
            </p>
          </section>

          <hr className="my-8" />

          <section>
            <h1 className="text-3xl font-bold mb-4">Game Rules</h1>

            <h2 className="text-xl font-semibold">1. Read the Claim Carefully</h2>
            <p>You will judge whether a given claim is True, False, or Uncertain.</p>

            <h2 className="text-xl font-semibold mt-4">2. Add Evidence (Optional)</h2>
            <ul className="list-disc ml-6">
              <li>Highlight claim parts</li>
              <li>Attach relevant links</li>
              <li>Add notes or reasoning</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">3. Vote Honestly</h2>
            <p>Your vote affects the collective Social Truth Score.</p>

            <h2 className="text-xl font-semibold mt-4">4. Reputation Matters</h2>
            <ul className="list-disc ml-6">
              <li>Correct votes increase reputation</li>
              <li>Incorrect votes decrease influence</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4 text-red-600">5. No Abusive Behavior</h2>
            <p>Any harassment, slurs, or abusive language will lead to warnings or bans.</p>

            <h2 className="text-xl font-semibold mt-4">6. No Manipulation</h2>
            <ul className="list-disc ml-6">
              <li>No fake evidence</li>
              <li>No random/intentional dishonest voting</li>
              <li>No bots</li>
              <li>No manipulating the Social Truth Score</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">7. Learn From Results</h2>
            <p>
              After verdict reveal, users can see correct evidence, reputation
              effects, and opinion changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
