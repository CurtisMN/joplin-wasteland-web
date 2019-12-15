import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/nav';
import Layout from '../components/layout';

class Rules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedOption: null};
  }

  newActiveTab(tabName) {
    this.setState(state => {
      state.selectedOption = tabName;
      return state;
    });
  }
  deactivateTab() {
    this.setState(state => {
      state.activeSection = '';
      return state;
    });
  }

  newActiveSection(newSectionName) {
    this.setState(state => {
      state.activeSection = newSectionName;
      return state;
    });
  }
  newActiveTab(tabName) {
    this.setState(state => {
      state.selectedOption = tabName;
      return state;
    });
  }
  deactivateTab() {
    this.setState(state => {
      state.selectedOption = null;
      return state;
    });
  }

  render() {
    return (
      <Layout>
        <Link href="/">
        <p
          onMouseEnter={() => this.newActiveTab('back')}
          onMouseLeave={() => this.deactivateTab()}
          className={
            this.state.selectedOption == 'back'
              ? 'selected-term-text'
              : 'termtext'
          }>
					{'< BACK'}
        </p>
        </Link>
        <p className="termtext">-----------------</p>
        <p className="termtext">[DECEMBER - 2019]</p>
        <p className="termtext">Wasteland Event</p>
        <p className="termtext">-----------------</p>

        <p
          onMouseEnter={() => this.newActiveTab('basics')}
          onMouseLeave={() => this.deactivateTab()}
          onClick={() =>
            this.newActiveSection(
              this.state.activeSection === 'basics' ? '' : 'basics',
            )
          }
          className={
            this.state.selectedOption == 'basics' || this.state.activeSection == 'basics'
              ? 'selected-term-text'
              : 'termtext'
          }>
          BASICS
        </p>
        {this.state.activeSection === 'basics' && (
          <div>
            <p className="termtext">
              Reloading - The only two ways to find ammo in the “wasteland” or
              to buy ammo from the NPCs. Prices may be different for each vendor
              and the weight they sell for Nuka Caps.
            </p>
            <p className="termtext">
              In Game Currency- The Currency used in this game are marked “Nuka
              Caps.” You can earn these caps by performing roles, quests, jobs,
              looting other players/ NPC’s, selling items, and/or looting loot
              boxes. Red caps are worth one, blue are worth five and yellow are
              worth ten. Before the game begins you, the player, will be given
              ten caps to start off with.
            </p>
            <p className="termtext">
              Grenade Count - Players are allowed to begin the game with a
              limited number of grenade-type weapons. The number of “grenade
              points” is six. Mini nukes count as two points, elemental
              smoke/frag grenades of any kind count as one. White smoke grenades
              do not count towards this number, and are deemed personal items.
            </p>
            <p className="termtext">
              Friendly fire counts - If you get hit by a friendly faction or
              team member you will still fall under the effects of whatever was
              used to hit you.
            </p>
            <p className="termtext">
              Field items - Field items will be marked by orange tape, you may
              use these items in game and loot these items off of "bleeding out
              people.”
            </p>
            <p className="termtext">
              Purple taped items - These are not to be touched or messed with,
              as they may be personal player or NPC items. You can not use them,
              take them, or move them.
            </p>
          </div>
        )}

        <p
          onMouseEnter={() => this.newActiveTab('combat')}
          onMouseLeave={() => this.deactivateTab()}
          onClick={() =>
            this.newActiveSection(
              this.state.activeSection === 'combat' ? '' : 'combat',
            )
          }
          className={
            this.state.selectedOption == 'combat' || this.state.activeSection == 'combat'
              ? 'selected-term-text'
              : 'termtext'
          }>
          COMBAT
        </p>
        {this.state.activeSection === 'combat' && (
          <div>
            <p className="termtext">
              Airsoft - When shot, you then have a two minute bleed out. You
              must use the full two minute bleed out before you go back to
              spawn, though anyone can be revived by anyone else with a stimpak
              during this bleed out time.
            </p>
            <p className="termtext">
              Melee - If you melee someone, that is an instant kill and that
              player has no bleed out and must go to their respawn point, but
              before they leave you may loot the player. You may melee someone
              that is “bleeding out.” To melee, tap or lightly swipe your melee
              weapon on to your target and say “melee.” You may use a two hand
              touch to melee your victims, again say “melee” when doing so.
            </p>
            <p className="termtext">
              Energy (Foam Dart guns) - Energy weapons are designated by Nerf
              darts or foam balls. Laser gun rounds go through armor and kill
              power armor users. When hit by a laser weapon, you will start to
              “bleed out”. Laser ammo can only be bought at a trader or found in
              loot. This will look like a ready to use mag with darts in it. You
              MAY NOT unload/load a nerf magazine no matter where you got it.
              Only traders and refs are authorized to do this. Players are not
              allowed to pick up used darts after they have been fired, unless
              authorized to do so by an NPC or ref.
            </p>
            <p className="termtext">
              Explosives - Frag Grenades (Enola Gaye, launched grenades, sound
              grenades and tornado/twister grenades) There is a 20ft kill zone
              from the grenade (20ft radius) . Frag grenades stun power armor
              users for 30 seconds. Mini Nukes, mortar artillery and howitzer
              artillery (rocket launcher)- Mini nuke launchers/ rocket launchers
              and mortar/ howitzer artillery rounds have the same type of
              killzone, which is 30ft from the fired round (30 ft radius) and
              cause players to “bleed out.” If caught 5ft within fired round,
              players are instantly dead and must go back to spawn and cannot be
              looted. Approval is required for these rounds to follow standard.
              Mini nukes are miniature nuclear bombs and must be of an approved
              design. Artillery and artillery/howitzer rounds are simply mini
              Nerf vortex howlers. These must be the ones with whistles to
              count.
            </p>
            <p className="termtext">
              Smoke Grenades - Certain smoke grenades fill a role at this event
              and are listed below, if you do not see a color listed it is just
              a regular smoke grenade and only serves as cover Gas Grenades
              (Yellow) - Gas grenades are designated by yellow smoke, and work
              in the same fashion as other grenades but anyone wearing a proper
              gas apparatus is immune. Proper gas apparatus will be designated
              as a real gas mask, respirator, or full face eye protection with
              attached hoses and tanks. PA users are immune to gas. There is a
              10ft zone of affect from each grenade (10ft radius) and the smoke
              itself counts as an area of affect. Any unprotected player caught
              in this area of effect is now bleeding out.
            </p>
            <p className="termtext">
              Fire Grenades (Red) - These grenades are designated by red smoke
              and work like other grenades with no way to escape the flames. PA
              users are immune to the effects of fire. There is a 10ft zone of
              affect from grenade (10ft radius) and the smoke itself counts as
              an area of affect. Any unprotected player caught in this area of
              affect is now bleeding out.
            </p>
            <p className="termtext">
              Radiation Grenades (Green) - Radiation grenades work like normal
              grenades except when affected the victim may use a “rad-away
              stick” immediately and leave the area, otherwise they are now
              bleeding out. PA users are immune to radiation. 10ft zone of
              affect from grenade (10 ft radius) and the smoke itself counts as
              an area of affect. Any unprotected player caught in this area of
              effect is now bleeding out.
            </p>
            <p className="termtext">
              EMP grenades (Blue) - Stun PA users for the duration that smoke is
              billowing from the grenade and is surrounded by thick smoke.
              (Power armor users are trained to know how long this is) There is
              a 10ft zone of affect from grenade (10 ft radius) and the smoke
              itself counts as an area of affect.
            </p>
            <p className="termtext">
              Traps - Most traps work like a melee attack, if you get hit by a
              bb or you are within 5ft of the trap you are dead, no bleed out,
              go back to spawn. Some traps may be rigged with grenades. For
              these, follow any guidelines for the type of grenade released.
              Some traps may shoot guns, these will act just as a normal gun but
              without a user. For safety and game play do not physically move or
              mess with the trap. Even if you see the trap before it goes off do
              not move or mess with it by hand, however, shooting or throwing
              items at traps is legal. Traps go through armor, shields and power
              armor users are stunned for 30 seconds after being hit by a trap
              with the only exemption being grenade and gun traps.
            </p>
          </div>
        )}

        <p
          onMouseEnter={() => this.newActiveTab('armor')}
          onMouseLeave={() => this.deactivateTab()}
          onClick={() =>
            this.newActiveSection(
              this.state.activeSection === 'armor' ? '' : 'armor',
            )
          }
          className={
            this.state.selectedOption == 'armor' || this.state.activeSection == 'armor'
              ? 'selected-term-text'
              : 'termtext'
          }>
          ARMOR
        </p>
        {this.state.activeSection === 'armor' && (
          <div>
            <p className="termtext">
              Ballistic Armor (bb proof) - Metal, tires, hard plastics, hardened
              leather, or EVA foam may be used to make armor. If you are hit in
              an armor piece by an airsoft round you are still in, but MUST yell
              out “armor hit.”
            </p>
            <p className="termtext">
              Power Armor (Juggernaut) - Power armor must be approved by admins.
              Contact admins if you want to be eligible for power armor. Power
              armor can only be “killed” by laser weapons, mini nukes, mortar
              and howitzer artillery-fired shells. One shot from a laser weapon
              kills a power armor user. If the Power armor user is within the
              “instant kill zone” (5ft of a mini nuke, mortar or howitzer fired
              shell) they are dead. If the power armor user is within the
              “bleeding out” zone the user is stunned for 30 seconds. Power
              armor users are fitted with a “stun plate” shooting them here with
              an airsoft gun will stun them for 10 seconds. When a power armor
              user is stunned, they can be killed with an explosive weapon.
              Power Armor users can also be killed by removing their core from
              their back. This will look like a yellow and red rag hanging from
              their backside. Power Armor users can not pick the agility perk as
              their perk.
            </p>
            <p className="termtext">
              Shields - Shields may be made of metal, plastic, kevlar, or wood .
              A few examples could be; a stop sign, riot shield, tower shield,
              etc. Shields stop melee attacks, airsoft rounds and laser rounds.
              For safety reasons there is no shield bashing. All Shields must be
              approved before they can be used.
            </p>
          </div>
        )}

        <p
          onMouseEnter={() => this.newActiveTab('medical')}
          onMouseLeave={() => this.deactivateTab()}
          onClick={() =>
            this.newActiveSection(
              this.state.activeSection === 'medical' ? '' : 'medical',
            )
          }
          className={
            this.state.selectedOption == 'medical' || this.state.activeSection == 'medical'
              ? 'selected-term-text'
              : 'termtext'
          }>
          MEDICAL (HEALING) and LOOTING:
        </p>
        {this.state.activeSection === 'medical' && (
          <div>
            <p className="termtext">
              Bleed out - After the two minute bleed out you are dead. If you
              get looted once, then you go back to your spawn, even if your two
              minutes are not up. You cannot be looted on your way back to spawn
              after bleed out even if you were not looted before. From there you
              wait 1 minute to spawn back in.
            </p>
            <p className="termtext">
              Stimpaks - To use, rip the paper off the stimpak, then push the
              stimpak on to the “bleeding” player. After that you or the player
              that as been simpaked MUST yell out SIMPAK! The player is then
              back in the game. You can not move or shoot when “bleeding out”,
              unless someone moves you or you have the Endurance Perk. If the
              simpak has exposed plastic or the wrapper is incomplete it can not
              be used.
            </p>
            <p className="termtext">
              Looting - You may loot people, that are "bleeding out." You may
              only take two items of the following, off of the person: up to
              four Nuka Caps, one field gun, one magazine, one piece of field
              armor, one field shield or one field melee weapon.
            </p>
            <p className="termtext">
              Carrying Bodies - You may use a two hand drag if your buddy is
              down. This means that if you put both your hands on your buddy he
              may get up and WALK to a new destination
            </p>
          </div>
        )}

        <p
          onMouseEnter={() => this.newActiveTab('quests')}
          onMouseLeave={() => this.deactivateTab()}
          onClick={() =>
            this.newActiveSection(
              this.state.activeSection === 'quests' ? '' : 'quests',
            )
          }
          className={
            this.state.selectedOption == 'quests' || this.state.activeSection == 'quests'
              ? 'selected-term-text'
              : 'termtext'
          }>
          QUESTS
        </p>
        {this.state.activeSection === 'quests' && (
          <div>
            <p className="termtext">
              Quest items will be marked with pink tape and will have the quest
              title on it. You may not move quest item unless you are on that
              quest to get that quest item. If you are to bleed out and die and
              you have a quest item, you must drop that quest item where you
              died. Once you respawn back in you may go back to get the quest
              item. NPC’s that originally had said quest item may take the quest
              item back. Note, a player may only have one side quest at a time.
              If you wish to give up on a side quest, go back to the NPC that
              hired you to do the quest and ask them to cancel the side quest.
            </p>
          </div>
        )}

        <p
          onMouseEnter={() => this.newActiveTab('perks')}
          onMouseLeave={() => this.deactivateTab()}
          onClick={() =>
            this.newActiveSection(
              this.state.activeSection === 'perks' ? '' : 'perks',
            )
          }
          className={
            this.state.selectedOption == 'perks' || this.state.activeSection == 'perks'
              ? 'selected-term-text'
              : 'termtext'
          }>
          PERKS
        </p>
        {this.state.activeSection === 'perks' && (
          <div>
            <p className="termtext">
              Every player gets one Starting Perk, SP for short, these SP’s are:
              strength, perception, endurance, charisma, intelligence, agility
              and luck. Your starting perk will be labeled by your arm band that
              you get after you pay.
            </p>
            <p className="termtext">
              Strength - Gives you the ability to “pick up” a player but with
              more options. When touching the player, you may use one hand, and
              you can run with your “bleeding out” buddy to a safer area. Note,
              your buddy is still “bleeding out” when moving him. You also may
              use one hand to melee someone, but you must still say “melee.”
            </p>
            <p className="termtext">
              Perception - Gives you a map of possible trap areas, possible loot
              spots. Players with this perception can be trained to use in-game
              mortar artillery and howitzer artillery. Note: only players with
              this perk and training to use the artillery, can use or move the
              artillery cannons.
            </p>
            <p className="termtext">
              Endurance - Gives you the ability to crawl when ‘Bleeding out,”
              you must still have your dead rag out though.
            </p>
            <p className="termtext">
              Charisma - Unlocks better prices, more quests, or special items
              with NPCs or Faction leaders. Can be used to get special treatment
              or dialogue with NPCs and sometimes even beasts can be swayed by
              your charm.
            </p>
            <p className="termtext">
              Intelligence - Unlocks different quests, specials items, and gives
              out intelligence codes for non-quest combo lock boxes.
            </p>
            <p className="termtext">
              Agility - Allows you to leave the area of effect of all smoke
              based attacks. Once the smoke lands and you are in the area of
              effect, which is 10ft or wherever the smoke moves, you can leave
              the area without being affected by that colored smoke, though you
              must leave that area immediately and must yell out AGILITY! Note:
              you can not enter into that area of effect of the colored smoke or
              you will then be under the effect of that color of smoke
            </p>
            <p className="termtext">
              Luck - Gives you ability to potentially get out of trouble with
              NPCs or Faction Leaders, if you are to upset them for one roleplay
              reason or another, but usually only once a day per NPC. You also
              get one dice reroll per session of any NPC gambling game, note you
              have to be playing at an NPC location that has a gambling game for
              this part of the perk to work. NPC’s choose the cool down time
              after you use this part of the Luck perk.
            </p>
          </div>
        )}
      </Layout>
    );
  }
}

export default Rules;
