import React from 'react';

export default class NotFound extends React.Component {

  render() {
    return (
      <table style="width: 100%; height: 100%">
  			<tr>
  				<td style="width: 100%; height: 100%; text-align: center; vertical-align: middle">
  					<h1>Windows</h1>
  					<div style="padding: 0px 25px">
  						<p style="text-align: left">
            An error has occurred:
  						</p>

  						<p style="text-align: left">
            Press ENTER to return Windows, or
  						</p>

  						<p style="text-align: left">
            Press CTRL+ALT+DEL to restart your computer. If you do this, you will lose any unsaved information in all open applications.
  						</p>

  						<p style="text-align: left">
            Error: 0x194 404_PAGE_NOT_FOUND
  						</p>
  					</div>
  					<ul class="menu">
  						<li>
  							<a href="#index.html">index</a>
  						</li>
  						<li>
  							<a href="#contact.html">webmaster</a>
  						</li>
  					</ul>
  				</td>
  			</tr>
  		</table>
    );
  }
}
