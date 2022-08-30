/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   notEqualSymbole.js                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: yel-aziz <yel-aziz@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/30 22:46:33 by yel-aziz          #+#    #+#             */
/*   Updated: 2022/08/30 22:47:52 by yel-aziz         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  console.log(testNotEqual(99));
  console.log(testNotEqual("99"));